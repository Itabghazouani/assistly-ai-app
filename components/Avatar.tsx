import Image from 'next/image';
import { createAvatar } from '@dicebear/core';
import { rings } from '@dicebear/collection';

interface IAavatarProps {
  seed: string;
  className?: string;
}

const Avatar = ({ seed, className }: IAavatarProps) => {
  const avatar = createAvatar(rings, {
    seed,
  });
  const svg = avatar.toString();

  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString(
    'base64',
  )}`;
  return (
    <Image
      src={dataUrl}
      alt="user Avatar"
      width={100}
      height={100}
      className={className}
    />
  );
};

export default Avatar;
