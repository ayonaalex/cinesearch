"use client";
import React, { useState, useEffect } from "react";
import { useMovieStore } from "../../stores/useMovieStore";
import styles from "./page.module.css";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  popularity: number;
}

export default function FavoritesPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const favorites = useMovieStore((state) => state.favorites);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {favorites.length === 0 ? (
        <div>You haven't added any favorite movies yet.</div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.listWrapper}>
            {favorites?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
