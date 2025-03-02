import Image from 'next/image';
import profilePic from '@/public/profile.png';
import ProfileBorder from './ProfileBorder';

export default function Photo() {
  return (
    <div className="relative h-[350px] w-[350px] shrink-0 overflow-hidden rounded-full mix-blend-lighten">
      <Image src={profilePic} alt="profile picture" className="absolute" />
      <ProfileBorder className="absolute" />
    </div>
  );

  // <div className="h-[350px] w-[350px] rounded-full bg-white">

  // </div>;
}
