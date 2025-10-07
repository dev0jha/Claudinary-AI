"use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)

    const router = useRouter()
    //max file size of 60 mb

    const MAX_FILE_SIZE = 70 * 1024 * 1024

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            //TODO: add notification
            alert("File size too large")
            return;
        }

        setIsUploading(true)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            await axios.post("/api/video-upload", formData)
            // check for 200 response
            router.push("/")
        } catch (error) {
            console.log(error)
            // notification for failure
        } finally{
            setIsUploading(false)
        }

    }


    return (
        <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-white">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-300">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-300">Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-300">Video File</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file-input file-input-bordered w-full bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Video"}
            </button>
          </form>
        </div>
        </div>
      );
}

export default VideoUpload