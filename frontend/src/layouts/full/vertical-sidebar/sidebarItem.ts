import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, NotebookIcon, Message2ShareIcon, PhoneCallIcon, SettingsIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    
    {
        title: 'Paramètres',
        icon: SettingsIcon,
        to: '/parametres'
    },
    
    {
        title: 'Répertoire',
        icon: PhoneCallIcon,
        to: '/repertoire'
    },
    
    {
        title: 'Historique',
        icon: NotebookIcon,
        to: '/historique'
    },
    
    {
        title: 'Messagerie',
        icon: Message2ShareIcon,
        to: '/messagerie'
    },


    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page'
    },
];

export default sidebarItem;
