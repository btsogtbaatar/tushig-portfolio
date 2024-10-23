import { Field, Input, Label, Tab, TabGroup, TabList } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skill, { SkillModel } from './Skill';

export interface SkillProps {
  skills: SkillModel[];
}

export enum SkillType {
  All = 'all',
  Soft = 'soft',
  Technical = 'technical',
}

export default function Skills(props: SkillProps) {
  const [skills, setSkills] = useState(props.skills);
  const [type, setType] = useState<SkillType>(SkillType.All);
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSkills(
      props.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (type === SkillType.All || skill.type === type)
      )
    );
  }, [type, searchText, props.skills]);

  useEffect(() => {
    const search = searchParams.get('search');

    if (search) {
      setSearchText(search);
    }
  }, [searchParams]);

  const search = (text: string) => {
    setSearchText(text);
    setSearchParams({ search: text });
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-end space-y-3 sm:space-y-0 sm:pr-24 mb-3 sm:mb-1">
        <Field className="flex w-full flex-col">
          <Label className="text-sm/6 font-medium text-white">
            Search by name
          </Label>
          <Input
            placeholder="Example: react"
            value={searchText}
            onChange={(e) => search(e.target.value)}
            className={clsx(
              'mt-2 block rounded-md border-none bg-gray-900/90 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-1 data-[focus]:-outline-offset-1 data-[focus]:outline-white/25'
            )}
          />
        </Field>
        <TabGroup className="w-full">
          <TabList className="flex gap-4 sm:justify-end">
            {['All', 'Technical', 'Soft'].map((name) => (
              <Tab
                onClick={() => setType(name.toLowerCase() as SkillType)}
                key={name}
                className="flex-1 sm:flex-none py-1 rounded-md px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-gray-900/90 data-[hover]:bg-gray-900/60 data-[selected]:data-[hover]:bg-gray-900/90 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
      <div className="justify-end hidden sm:flex">
        <div className="px-8 text-sm font-[Futura]">YoE</div>
      </div>
      <div className="space-y-12 sm:space-y-8">
        {skills.length > 0 &&
          skills
            .sort((x, y) => y.yearsOfExperience - x.yearsOfExperience)
            .sort((x, y) => (x.order && y.order ? x.order - y.order : 0))
            .map((skill) => <Skill key={skill.id} skill={skill} />)}
        {skills.length === 0 && (
          <div className="my-8 text-center">Skills not found.</div>
        )}
      </div>
    </div>
  );
}
