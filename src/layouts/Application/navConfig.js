/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import PeopleIcon from '@material-ui/icons/People';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExtensionIcon from '@material-ui/icons/Extension';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';

export default [
    {
        subheader: 'Management',
        items: [
            {
                title: 'User',
                href: '/management/user',
                icon: PeopleIcon
            },
            {
                title: 'Customer',
                href: '/management/customer',
                icon: ContactsIcon,
                items: [
                    {
                        title: 'Customers',
                        href: '/management/customer'
                    },
                    {
                        title: 'Address list',
                        href: '/management/customer/address-list'
                    },
                    {
                        title: 'Settings',
                        href: '/management/customer/settings',
                    }
                ]
            },
            {
                title: 'Article',
                href: '/management/article',
                icon: ExtensionIcon,
                items: [
                    {
                        title: 'Articles',
                        href: '/management/article'
                    },
                    {
                        title: 'Barcodes',
                        href: '/management/article/barcodes'
                    },
                    {
                        title: 'Stock quantity',
                        href: '/management/article/stock-quantity'
                    },
                    {
                        title: 'Settings',
                        href: '/management/article/settings'
                    }
                ]
            },
            {
                title: 'Document',
                href: '/management/document',
                icon: DescriptionIcon,
                items: [
                    {
                        title: 'Document',
                        href: '/management/document',
                        items: [
                            {
                                title: 'List',
                                href: '/management/document/list'
                            },
                            {
                                title: 'Position',
                                href: '/management/document/position'
                            },
                            {
                                title: 'Settings',
                                href: '/management/document/document/settings'
                            }
                        ]
                    },
                    {
                        title: 'Order',
                        href: '/management/document/order',
                        items: [
                            {
                                title: 'List',
                                href: '/management/document/order/list'
                            },
                            {
                                title: 'Position',
                                href: '/management/document/order/position'
                            },
                            {
                                title: 'Settings',
                                href: '/management/document/position/state'
                            }
                        ]
                    },
                    {
                        title: 'Settings',
                        href: '/management/document/settings'
                    }
                ]
            }
        ]
    },
    {
        subheader: 'Administration',
        items: [
            {
                title: 'Users',
                href: '/admin/user/list',
                icon: SettingsIcon,
            }
        ]
    }
];
