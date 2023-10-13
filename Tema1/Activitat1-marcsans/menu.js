const { Menu } = require('electron')

const teplate = [
    {
        label: 'Archivo',
        submenu: [
            {
                label: 'Dashboard'
            },
            {
                label: 'All Stories'
            },
            {
                label: 'Widgets'
            },
            {
                label: 'Galleries'
            },
            {
                label: 'Highlights'
            },
            {
                label: 'Booked'
            },
            {
                label: 'Ads'
            },
            {
                label: 'Reports'
            }
        ]
    },

    {
        label: 'Editar',
        submenu: [
            {
                label: 'Soures'
            },
            {
                label: 'Social Accounts'
            },
        ]
    },
    
    {
        label: 'OTHER',
        submenu: [
            {
                label: 'Integrations'
            },
            {
                label: 'Help'
            }
        ]
    }
]

module.exports = {teplate}
