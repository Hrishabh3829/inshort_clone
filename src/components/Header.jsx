import {AppBar, Toolbar,styled} from '@mui/material';
import { Menu } from '@mui/icons-material';


const StyledHeader = styled(AppBar)`
    background: #fff;
    height: 70px;
`

const MenuIcon = styled(Menu)`
     color: #000;
`

const Image = styled('img')({
    height: 50,
    margin: 'auto',
    paddingRight: 70,




})


const Header = () => {

    const url ="https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

    return(
       
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt="logo" />

            </Toolbar>

        </StyledHeader>



    )
}


export default Header; 