"use client"
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import { Video } from '../../../../types'
function Home() {
    const [videos, setVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get("/api/videos")
            if(Array.isArray(response.data)) {
                setVideos(response.data)
            } else {
                throw new Error(" Unexpected response format");

            }
        } catch (error) {
            console.log(error);
            setError("Failed to fetch videos")

        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])

    const handleDownload = useCallback((url: string, title: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [])

    if(loading){
        return <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <span className="loading loading-spinner loading-lg text-white"></span>
        </div>
    }

    if(error) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="alert alert-error bg-red-900 border-red-700 text-red-100">
                <span>{error}</span>
            </div>
        </div>
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="container mx-auto px-2 sm:px-4 py-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">Videos</h1>
              {videos.length === 0 ? (
                <div className="text-center text-base sm:text-lg text-gray-400 py-8">
                  No videos available
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {
                    videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            onDownload={handleDownload}
                        />
                    ))
                  }
                </div>
              )}
            </div>
        </div>
      );
}

export default Home