// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Nafri',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '64df23cc8ab0a64d3c2da6ba31e47808', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-8.646460',
	defaultLongitude: '116.112305',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Toots',
			icon: 'globe-2',
			link: 'https://universeodon.com/',
		},
		{
			id: '2',
			name: 'Calckey',
			icon: 'home',
			link: 'https://calckey.social/',
		},
		{
			id: '3',
			name: 'Pahe.in',
			icon: 'film',
			link: 'https://pahe.li/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'PixelFed',
			icon: 'aperture',
			link: 'https://pixelfed.social/',
		},
		{
			id: '6',
			name: 'Piped',
			icon: 'youtube',
			link: 'https://cf.piped.video/feed',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'kbin',
			icon: 'newspaper',
			link: 'kbin.social/',
		},
		{
			id: '2',
			name: 'Lemmy',
			icon: 'glasses',
			link: 'https://lemmy.world/',
		},
		{
			id: '3',
			name: 'Matrix (cinny.in)',
			icon: 'messages-square',
			link: 'https://app.cinny.in/',
		},
		{
			id: '4',
			name: 'IGG',
			icon: 'gamepad-2',
			link: 'https://igg-games.com/',
		},
		{
			id: '5',
			name: 'Spacehey',
			icon: 'spade',
			link: 'https://spacehey.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	]
