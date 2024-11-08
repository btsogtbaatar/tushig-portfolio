import { Field, Input, Label, Tab, TabGroup, TabList } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { capitalizeWords } from '../utility';
import CustomSelect from './CustomSelect';
import Skill, { SkillModel } from './Skill';

export interface SkillProps {
  skills: SkillModel[];
}

export enum SkillType {
  All = 'all',
  Development = 'development',
  Database = 'database',
  Tools = 'tools',
  Soft = 'soft',
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
    const type = searchParams.get('type');

    if (search) {
      setSearchText(search);
    }

    if (type) {
      setType(type as SkillType);
    }
  }, [searchParams]);

  const search = (text: string) => {
    setSearchText(text);
    setSearchParams({ search: text, type: type });
  };

  const selectType = (type: SkillType) => {
    setType(type);
    setSearchParams({ search: searchText, type: type });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-end space-y-3 sm:space-y-0 sm:pr-24 mb-3 sm:mb-1 space-x-4">
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
        <TabGroup className="hidden sm:block w-full">
          <TabList className="flex gap-4 sm:justify-end">
            {Object.values(SkillType).map((name) => (
              <Tab
                onClick={() => selectType(name.toLowerCase() as SkillType)}
                key={name}
                className={clsx(
                  'flex-1 sm:flex-none py-1 rounded-md px-3 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-gray-900/60 data-[focus]:outline-1 data-[focus]:outline-white capitalize',
                  type === name.toLowerCase() && 'bg-gray-900/90'
                )}
              >
                {name}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
        <CustomSelect
          className="block sm:hidden"
          options={Object.values(SkillType).map((option) => ({
            value: option.toLowerCase(),
            label: capitalizeWords(option),
          }))}
          onChange={(option: string) => selectType(option as SkillType)}
        />
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
