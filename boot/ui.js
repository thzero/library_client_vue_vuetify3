import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/lib/styles/main.sass';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';

export default async ({
	framework
}) => {
    const vuetify = createVuetify({
		components,
		directives
	});
	framework.use(vuetify);
};
