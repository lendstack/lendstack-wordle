import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import { Switch } from "@mui/material";

export default function Navbar(props: any) {

    const [menuOpen, setMenuOpen] = useState(null);

    const SwitcherMode: boolean = props.dark == true;

    const handleChange = () => {
        props.darkness(!props.dark);
    };

    const open = Boolean(menuOpen);
    const handleClick = (event: any) => {
        setMenuOpen(event.currentTarget);
    };
    const handleClose = () => {
        setMenuOpen(null);
    };

    return (
        <>
            <div className="flex w-100 justify-between items-center pt-5 py-3 justify-items-center dark:text-slate-200">
                <HelpOutlineIcon
                    onClick={() => {
                    props.help(true);
                    }}
                />
                <h1 className='italic text-2xl px-20 text-black dark:text-slate-200'>Welcome to the world of Wordle! </h1>
                <SettingsIcon
                    onClick={handleClick}
                    className="text-black dark:text-white my-1"
                />
                <Menu anchorEl={menuOpen} open={open} onClose={handleClose}>
                    {!SwitcherMode && <FormControlLabel
                    className="pl-3.5 text-slate-600"
                    control={
                        <Switch onChange={handleChange} />
                    }
                    label="Dark mode"
                    />}
                    {SwitcherMode && <FormControlLabel
                    className="pl-3.5 text-slate-600"
                    control={
                        <Switch onChange={handleChange} defaultChecked />
                    }
                    label="Dark mode"
                    />}
                </Menu>
            </div>
        </>
    );
}