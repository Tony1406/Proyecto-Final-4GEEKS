const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			paises: [],
			ciudades: [],
			rutas: [],
			misRutas: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getUsers: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}users`)
					const data = await res.json()
					setStore({users: data})
				} catch (error) {
					return error
				}
			},
			getPaises: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}paises`)
					const data = await res.json()
					setStore({paises: data})
				} catch (error) {
					return error
				}
			},
			getCiudades: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}ciudad`)
					const data = await res.json()
					setStore({ciudades: data})
				} catch (error) {
					return error
				}
			},
			getRutas: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}ruta`)
					const data = await res.json()
					setStore({rutas: data})
				} catch (error) {
					return error
				}
			},
			getCiudadPorPais: async (pais) => {
				try {
					const res = await fetch(process.env.BACKEND_URL + pais)
					const data = await res.json()
					return data
				} catch (error) {
					return error
				}
			}
		}
	}
};

export default getState
