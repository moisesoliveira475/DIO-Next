import Image from 'next/image';
import logo from '@/assets/logo-dio.svg';
import Button from '../Button';
import './styles.css';


export default function Header() {
    return (
        <header>
            <Image alt='DIO logo' src={logo} className='logo'/>
            <h1>Home</h1>
            <nav>
            <Button content='Entrar' />
            <Button content='Cadastrar'/>
            </nav>            
        </header>
    );
}