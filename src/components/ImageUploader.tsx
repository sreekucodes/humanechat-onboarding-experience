
import React, { useState } from 'react';
import { ImagePlus, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  className?: string;
  aspectRatio?: 'square' | 'video';
  defaultImage?: string;
  altText: string;
  onImageChange?: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  className,
  aspectRatio = 'video',
  defaultImage,
  altText,
  onImageChange
}) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(defaultImage);
  const [isDragging, setIsDragging] = useState(false);

  const aspectClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-video';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImageUrl = event.target?.result as string;
        setImageUrl(newImageUrl);
        onImageChange?.(newImageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImageUrl = event.target?.result as string;
        setImageUrl(newImageUrl);
        onImageChange?.(newImageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={cn(
        aspectClass,
        "bg-app-gray rounded-md overflow-hidden relative",
        isDragging ? "border-2 border-dashed border-app-blue" : "border border-gray-200",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-opacity duration-300"
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          style={{ opacity: 0 }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <ImagePlus size={32} className="mb-2" />
          <p className="text-sm">Drag & drop or click to upload</p>
        </div>
      )}
      
      <div className="absolute bottom-3 right-3">
        <label className="cursor-pointer bg-app-blue text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors">
          <Upload size={16} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
