type BoxProps = {
  children: JSX.Element
}

export default function Box({children}:BoxProps) {
  return (
    <div className="bg-white py-3 px-3 rounded-md shadow-boxShadow">{children}</div>
  )
}
