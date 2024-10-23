export interface PageHeaderProps {
  children: React.ReactNode;
  backgroundImageUrl: string;
}

function PageHeader(props: PageHeaderProps) {
  return (
    <div
      className="h-[250px] sm:h-[400px] bg-cover"
      style={{ backgroundImage: `url(${props.backgroundImageUrl})` }}
    >
      <div className="h-full flex max-w-5xl px-5 sm:px-0 pb-4 mx-auto items-end">
        <h1 className="font-['Futura'] font-bold text-[4em] sm:text-[8em] leading-[0.8em] sm:leading-none text-left lowercase break-words w-full">
          {props.children}
        </h1>
      </div>
    </div>
  );
}

export default PageHeader;
