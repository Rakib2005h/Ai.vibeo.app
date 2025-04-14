import { useState } from "react";

export default function ThumbnailGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch("/api/generate-thumbnail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImageUrl(data.imageUrl);
    setLoading(false);
  };

  return (
    <div className="bg-slate-800 p-6 text-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold">YouTube Thumbnail Generator</h2>
      <input
        type="text"
        placeholder="Enter your video title or idea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 rounded bg-slate-700 border border-slate-600"
      />
      <button
        onClick={handleGenerate}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Thumbnail"}
      </button>
      {imageUrl && (
        <img src={imageUrl} alt="Generated thumbnail" className="rounded mt-4 w-full" />
      )}
    </div>
  );
}