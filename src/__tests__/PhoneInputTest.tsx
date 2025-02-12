import { render, screen } from '@testing-library/react'
import PhoneInput from '@/app/phone/page'

describe('PhoneInput', () => {
  it('renders phone input page correctly', () => {
    render(<PhoneInput />)
    expect(screen.getByText('Ingresa tu número')).toBeInTheDocument()
    expect(screen.getByText('Lo usarás para iniciar sesión')).toBeInTheDocument()
    expect(screen.getByText('Número de teléfono')).toBeInTheDocument()
    expect(screen.getByText('Continuar')).toBeInTheDocument()
  })
})