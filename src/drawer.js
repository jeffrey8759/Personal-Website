import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactsIcon from '@material-ui/icons/Contacts';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    list: {
          width: 250,
        },
    fullList: {
          width: 'auto',
        },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        });

    const toggleDrawer = (anchor, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
                }

          setState({ ...state, [anchor]: open });
        };

    function ListItemLink(props) {
        var link = "/";
        if(props.link === 'About'){
          link = "/";
        } else if (props.link === 'LinkedIn'){
          link = "https://www.linkedin.com/in/jeffrey-cheng23/"
        } else if (props.link === 'GitHub'){
          link = "https://github.com/jeffrey8759?tab=repositories"
        }
        return <ListItem button component="a" {...props} href={link}/>;
    }

    const list = (anchor) => (
          <div
            className={clsx(classes.list, {
                      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                    })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
						{['About', 'Files', 'LinkedIn', 'GitHub', 'Contact'].map((text, index) => (
												<ListItemLink link={text}>
													<ListItemIcon>
													{(() => {
														switch(text){
															case "About":
																return <HomeIcon />;
															case "Files":
																return <DescriptionIcon />;
															case "LinkedIn":
																return <LinkedInIcon />;
															case "GitHub":
																return <GitHubIcon />;
															case "Contact":
																return <ContactsIcon />;
															default: 
																return <MailIcon />;
													  }
                          })()}
													</ListItemIcon>
													<ListItemText primary={text} />
												</ListItemLink>
						))}
					</List>
				</div>
			);
    return (
          <div>
            {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Fab style={{top:20, left:20, position:'fixed'}} variant="contained" size="large" onClick={toggleDrawer(anchor, true)}>
													<MenuIcon/>
                          &nbsp; Menu
												</Fab>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
          </div>
        );
}

