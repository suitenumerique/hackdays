import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

interface GithubButtonProps {
  text: string;
}

export function GithubButton({ text }: GithubButtonProps) {
  return (
    <a
      href="https://github.com/suitenumerique/hackdays2025"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className="flex gap-2 text-lg justify-center py-2 items-center px-4 rounded-full bg-green-700 text-beige-100 text-center transition-all hover:bg-orange-500"
    >
      <GitHubIcon className="text-beige-100" fontSize="small" />
      <span>{text}</span>
    </a>
  );
}
