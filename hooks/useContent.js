'use client'
import { useState, useEffect } from 'react';

export function useContent(contentPath) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Dynamically import the JSON file based on contentPath
    import(`../content/${contentPath}.json`)
      .then((mod) => setContent(mod.default))
      .catch((err) => console.error("Failed to load content", err));
  }, [contentPath]);

  return content;
}
