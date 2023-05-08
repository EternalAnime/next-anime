import React from "react";
import { getAnimeTitle } from "../utils/contants";
import { BsFillCalendarDateFill, BsFillPlayCircleFill } from "react-icons/bs";
import path from "../utils/path";
import { Title } from "../types/utils";
import { AiFillClockCircle } from "react-icons/ai";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ShowCaseItemProps {
  id: string;
  image: string;
  title: Title;
  type?: string;
  duration?: number;
  releaseDate?: number;
  border?: boolean;
}

const ShowCaseItem: React.FC<ShowCaseItemProps> = ({
  duration,
  id,
  image,
  releaseDate,
  title,
  type,
  border = true,
}) => {
  return (
    <Link
      href={path.anime(id)}
      className={`${border && "border border-gray-600 p-3"} flex space-x-4`}
      key={id}
    >
      <LazyLoadImage
        effect="blur"
        className="rounded-md w-[60px] aspect-[9/16]"
        src={image}
      />
      <div className="text-sm flex-1">
        <h5 className="text-sm font-semibold line-clamp-1">
          {getAnimeTitle(title)}
        </h5>
        <div className="flex items-center space-x-3 mt-2">
          {type && (
            <p className="flex items-center space-x-2 text-sm">
              <BsFillPlayCircleFill />
              <span className="text-xs">{type}</span>
            </p>
          )}
          {duration && (
            <p className="flex items-center space-x-2 text-sm">
              <AiFillClockCircle />
              <span className="text-xs">{duration}m</span>
            </p>
          )}
          {releaseDate && (
            <p className="flex items-center space-x-2 text-sm">
              <BsFillCalendarDateFill />
              <span className="text-xs">{releaseDate}</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ShowCaseItem;