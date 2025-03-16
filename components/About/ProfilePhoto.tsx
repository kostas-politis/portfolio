import Image from 'next/image';
import profilePic from '@/public/profile2.png';
import ProfileBorder from './ProfileBorder';

export default function ProfilePhoto() {
  return (
    <div className="relative h-[350px] w-[350px] shrink-0 overflow-hidden rounded-full mix-blend-lighten">
      <Image src={profilePic} alt="profile picture" className="absolute" />
      <ProfileBorder className="absolute" />
    </div>
  );
}
