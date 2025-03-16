import {
  SiAngular,
  SiAppium,
  SiDocker,
  SiExpress,
  SiGit,
  SiGnubash,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import GradientSkills from '@/components/Skills/SkillsWrapper';
import Skill from '@/components/Skills/Skill';
import SkillJava from './SkillJava';
import SkillPlaywright from './SkillPlaywright';

export default function SkillsSection() {
  return (
    <div id="resume" className="text-center">
      <p className="mb-2 text-sm text-white/60">What I&apos;ve done so far</p>
      <h2>Work Experience</h2>
      <div className="mx-auto my-14">
        <GradientSkills>
          <Skill title="JavaScript">
            <SiJavascript size={32} />
          </Skill>
          <Skill title="TypeScript">
            <SiTypescript size={32} />
          </Skill>
          <Skill title="Bash">
            <SiGnubash size={32} />
          </Skill>
          <Skill title="Java">
            <SkillJava size={32} />
          </Skill>
          <Skill title="Selenium">
            <SiSelenium size={32} />
          </Skill>
          <Skill title="Appium">
            <SiAppium size={32} />
          </Skill>
          <Skill title="Playwright">
            <SkillPlaywright size={32} />
          </Skill>
          <Skill title="Jest">
            <SiJest size={32} />
          </Skill>
        </GradientSkills>
        <GradientSkills>
          <Skill title="Express.js">
            <SiExpress size={32} />
          </Skill>
          <Skill title="Next.js">
            <SiNextdotjs size={32} />
          </Skill>
          <Skill title="MongoDB">
            <SiMongodb size={32} />
          </Skill>
          <Skill title="Tailwind">
            <SiTailwindcss size={32} />
          </Skill>
          <Skill title="React">
            <SiReact size={32} />
          </Skill>
          <Skill title="Angular">
            <SiAngular size={32} />
          </Skill>
          <Skill title="Git">
            <SiGit size={32} />
          </Skill>
          <Skill title="Docker">
            <SiDocker size={32} />
          </Skill>
          <Skill title="Jenkins">
            <SiJenkins size={32} />
          </Skill>
          <Skill title="Kubernetes">
            <SiKubernetes size={32} />
          </Skill>
        </GradientSkills>
      </div>
    </div>
  );
}
