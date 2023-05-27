import Link from "next/link";
import React from "react";
import Image from "next/image";

const Movie = ({ title, key, id, poster_path, release_date }) => {
  const imagepath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagepath + poster_path}
          alt="s"
          width={300}
          height={150}
        ></Image>
      </Link>
    </div>
  );
};

export default Movie;
