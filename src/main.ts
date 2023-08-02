import './assets/styles/main.scss';

import { createApp, defineCustomElement  } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import TheWeather from '@/components/TheWeather.vue';
import TheWeatherInfo from '@/components/TheWeatherInfo.vue';
import TheWeatherSettings from '@/components/TheWeatherSettings.vue';
import BaseCitiesList from '@/components/BaseCitiesList.vue';
import BaseCityItem from '@/components/BaseCityItem.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseLoader from '@/components/BaseLoader.vue';
import IconArrow from '@/components/IconArrow.vue';
import IconBurger from '@/components/IconBurger.vue';
import IconCross from '@/components/IconCross.vue';
import IconEnter from '@/components/IconEnter.vue';
import IconSettings from '@/components/IconSettings.vue';
import IconUrn from '@/components/IconUrn.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const WeatherWidget = defineCustomElement(App);
const TheWeatherElement = defineCustomElement(TheWeather);
const TheWeatherInfoElement = defineCustomElement(TheWeatherInfo);
const TheWeatherSettingsElement = defineCustomElement(TheWeatherSettings);
const BaseCitiesListElement = defineCustomElement(BaseCitiesList);
const BaseCityItemElement = defineCustomElement(BaseCityItem);
const BaseFormElement = defineCustomElement(BaseForm);
const BaseLoaderElement = defineCustomElement(BaseLoader);
const IconArrowElement = defineCustomElement(IconArrow);
const IconBurgerElement = defineCustomElement(IconBurger);
const IconCrossElement = defineCustomElement(IconCross);
const IconEnterElement = defineCustomElement(IconEnter);
const IconSettingsElement = defineCustomElement(IconSettings);
const IconUrnElement = defineCustomElement(IconUrn);

customElements.define('weather-widget', WeatherWidget);
customElements.define('the-weather', TheWeatherElement);
customElements.define('the-weather-info', TheWeatherInfoElement);
customElements.define('the-weather-settings', TheWeatherSettingsElement);
customElements.define('base-cities-list-element', BaseCitiesListElement);
customElements.define('base-city-item-element', BaseCityItemElement);
customElements.define('base-form-element', BaseFormElement);
customElements.define('base-loader-element', BaseLoaderElement);
customElements.define('icon-arrow-element', IconArrowElement);
customElements.define('icon-burger-element', IconBurgerElement);
customElements.define('icon-cross-element', IconCrossElement);
customElements.define('icon-enter-element', IconEnterElement);
customElements.define('icon-settings-element', IconSettingsElement);
customElements.define('icon-urn-element', IconUrnElement);
