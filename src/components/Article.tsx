interface ArticleProps {
  title: String
  date: String
}

export default function Article({ title, date }: ArticleProps) {
  return (
    <div className="group mb-2 cursor-pointer">
      <div className="flex justify-between">
        <h4 className="text-md font-medium">{ title }</h4>
        <div className="text-sm">
          <div className="group-hover:hidden">
            <p className="text-neutral-500">{ date }</p>
          </div>
          <div className="hidden group-hover:flex items-center gap-x-1.5">
            <p>Read</p>
            <div>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
