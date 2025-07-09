type HeaderProps = React.ComponentProps<'header'>

export function Header({ children, className = '', ...props }: HeaderProps) {
  return (
    <header className={`container ${className}`} {...props}>
      {children}
    </header>
  )
}
