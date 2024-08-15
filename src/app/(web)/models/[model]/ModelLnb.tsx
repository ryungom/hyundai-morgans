'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface OptionList {
  [key: string]: string;
}

const optionList:OptionList = {
  detail: '모델 상세',
  engine: '엔진 타입',
  drivetrain: '구동 타입',
  passenger:'시트 구성',
  exterior:'외장 컬러',
  interior:'내장디자인 & 컬러',
  garnish: '내장가니쉬',
  wheel: '휠 & 타이어',
  package: '패키지',
  add: '선택 품목',
  payment: '결제'
};

type OptionKey = keyof typeof optionList;

export default function ModelLnb ({params}: {params: { model: string }}) {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? 'text-white' : '';
    
    const items = Object.keys(optionList).map((item) =>{
      const key = item as OptionKey;
      const content = optionList[item];
      let pathName = item === 'detail' ? '' : '/' + item;
      return (
        <li key={key} className={isActive(`/models/${params.model}${pathName}`)}>
          <Link href={`/models/${params.model}${pathName}`}>{content}</Link>
        </li>
      );
    });
  return(
    <ul className="absolute top-[220px] left-[80px] text-[#666666] flex flex-col gap-y-2.5 font-light text-xl z-20">
    {/* To.모건 : 활성화된 페이지의 title에 text-white class를 붙여주세요 */}
      {items}
    </ul>
  )
}
