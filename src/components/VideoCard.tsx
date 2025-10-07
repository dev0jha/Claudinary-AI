import React, {useState, useEffect, useCallback} from 'react'
import {getCldImageUrl, getCldVideoUrl} from "next-cloudinary"
import { Download, Clock, FileDown, FileUp } from "lucide-react";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import {filesize} from "filesize"
import { Video } from '@prisma/client';
import Image from 'next/image';

dayjs.extend(relativeTime)

interface VideoCardProps {
    video: Video;
    onDownload: (url: string, title: string) => void;
}

const  VideoCard: React.FC<VideoCardProps> = ({video, onDownload}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [previewError, setPreviewError] = useState(false)

    const getThumbnailUrl = useCallback((publicId: string) => {
        return getCldImageUrl({
            src: publicId,
            width: 400,
            height: 225,
            crop: "fill",
            gravity: "auto",
            format: "jpg",
            quality: "auto",
            assetType: "video"
        })
    }, [])

    const getFullVideoUrl = useCallback((publicId: string) => {
        return getCldVideoUrl({
            src: publicId,
            width: 1920,
            height: 1080,

        })
    }, [])

    const getPreviewVideoUrl = useCallback((publicId: string) => {
        return getCldVideoUrl({
            src: publicId,
            width: 400,
            height: 225,
            rawTransformations: ["e_preview:duration_15:max_seg_9:min_seg_dur_1"]

        })
    }, [])

    const formatSize = useCallback((size: number) => {
        return filesize(size)
    }, [])

    const formatDuration = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.round(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
      }, []);

      const compressionPercentage = Math.round(
        (1 - Number(video.compressedSize) / Number(video.originalSize)) * 100
      );

      useEffect(() => {
        setPreviewError(false);
      }, [isHovered]);

      const handlePreviewError = () => {
        setPreviewError(true);
      };

      return (
        <div
          className="card bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <figure className="aspect-video relative">
            {isHovered ? (
              previewError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <p className="text-red-400">Preview not available</p>
                </div>
              ) : (
                <video
                  src={getPreviewVideoUrl(video.publicId)}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  onError={handlePreviewError}
                />
              )
            ) : (
              <Image
                src={getThumbnailUrl(video.publicId)}
                alt={video.title}
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-80 px-2 py-1 rounded-lg text-sm flex items-center text-white">
              <Clock size={16} className="mr-1" />
              {formatDuration(Number(video.duration))}
            </div>
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold text-white">{video.title}</h2>
            <p className="text-sm text-gray-300 mb-4">
              {video.description}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Uploaded {dayjs(video.createdAt).fromNow()}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <FileUp size={18} className="mr-2 text-blue-400" />
                <div>
                  <div className="font-semibold text-white">Original</div>
                  <div className="text-gray-300">{formatSize(Number(video.originalSize))}</div>
                </div>
              </div>
              <div className="flex items-center">
                <FileDown size={18} className="mr-2 text-green-400" />
                <div>
                  <div className="font-semibold text-white">Compressed</div>
                  <div className="text-gray-300">{formatSize(Number(video.compressedSize))}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm font-semibold text-white">
                Compression:{" "}
                <span className="text-yellow-400">{compressionPercentage}%</span>
              </div>
              <button
                className="btn bg-blue-600 hover:bg-blue-700 text-white btn-sm border-none"
                onClick={() =>
                  onDownload(getFullVideoUrl(video.publicId), video.title)
                }
              >
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      );
}

export default VideoCard