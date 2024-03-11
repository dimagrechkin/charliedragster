import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://music.apple.com/ua/artist/charlie-dragster/1490331105"
        >
          APPLE MUSIC
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://open.spotify.com/artist/2eMz1L8eKhqZJqlPO7eVJ9?si=M70_JhN-SVSR217YA8EE1Q"
        >
          SPOTIFY
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://soundcloud.com/aw2hidpggr42"
        >
          SOUNDCLOUD
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://soundcloud.com/acharliedragster"
        >
          RARE SOUNDCLOUD
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/51889617958731799907135205249741173614347316798349306580562531469835636834305"
        >
          NFT
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/contacts">
          CONTACT
        </a>
      </nav>
    </header>
  )
}
