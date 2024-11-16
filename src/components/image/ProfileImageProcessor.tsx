import { useEffect, useRef } from "react";

const ProfileImageProcessor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size for a professional headshot ratio (4:5)
    canvas.width = 800;
    canvas.height = 1000;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#5D4A82"); // Your brand purple-dark
    gradient.addColorStop(1, "#856BAE"); // Your brand purple-light

    // Fill background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw logo watermark
    const drawLogo = () => {
      // Create an SVG logo
      ctx.save();
      ctx.globalAlpha = 0.1; // 10% opacity for watermark

      // Center position for logo
      const logoSize = canvas.width * 0.5;
      const x = (canvas.width - logoSize) / 2;
      const y = (canvas.height - logoSize) / 2;

      // Draw circle
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        logoSize / 2,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Draw "LBG" text
      ctx.globalAlpha = 0.15;
      ctx.font = `${logoSize * 0.4}px Arial`;
      ctx.fillStyle = "#5D4A82";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("LBG", canvas.width / 2, canvas.height / 2);

      ctx.restore();
    };

    // Load and process the profile image
    const img = new Image();
    img.src = "/api/placeholder/800/1000"; // Replace with actual image path in production
    img.onload = () => {
      // Calculate dimensions to maintain aspect ratio
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const width = img.width * scale;
      const height = img.height * scale;
      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      // Draw background first
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw logo watermark
      drawLogo();

      // Draw the image
      ctx.drawImage(img, x, y, width, height);

      // Add overlay gradient for consistency
      const overlayGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      overlayGradient.addColorStop(0, "rgba(93, 74, 130, 0.1)"); // #5D4A82 with opacity
      overlayGradient.addColorStop(1, "rgba(133, 107, 174, 0.2)"); // #856BAE with opacity
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div className="relative max-w-xl mx-auto">
      <canvas ref={canvasRef} className="w-full h-auto rounded-xl shadow-lg" />
      <button
        className="mt-4 px-6 py-2 bg-[#5D4A82] text-white rounded-lg hover:bg-[#856BAE] transition-colors"
        onClick={() => {
          const canvas = canvasRef.current;
          if (canvas) {
            // Create download link
            const link = document.createElement("a");
            link.download = "processed-headshot.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          }
        }}
      >
        Download Processed Image
      </button>
    </div>
  );
};

export default ProfileImageProcessor;
