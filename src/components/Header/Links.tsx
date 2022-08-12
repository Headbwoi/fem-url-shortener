interface Props {
  name: string
  color: string
  height: string
}

function Links(props: Props) {
  return (
    <div className="flex items-center space-x-8">
      <a
        href="/"
        className={`font-bold capitalize ${props.color} ${props.height} hover:text-Very_Dark_Violet duration-150`}
      >
        {props.name}
      </a>
    </div>
  )
}

export default Links
