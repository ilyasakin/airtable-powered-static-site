### Airtable powered static site

Gatsby gets data from Airtable API, builds the site according to data and makes the site static.
If you do make a change you'll need to build it again.

[See example Airtable table](https://airtable.com/invite/l?inviteId=invjhAwFKqiUa5DYQ&inviteToken=b5375aac3973686a0a626c3fc8753a84c39b61535cfe2a8f91a9e7d7360ce7d7)

#### Airtable Fields

| Field Name  | Description                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | Name of the section. It doesn't really matter whatever name you chose for this. It will not be present on content itself.                |
| Type        | Type of the section. Currently there are two types of section. Hero and Content. Hero stands for Hero title. Content is well... content? |
| Text        | Title for both types. Might change this field name later.                                                                                |
| Description | Description for Content type. Leave blank for Hero type.                                                                                 |
| Image       | Image properties in JSON format. ex. `{"position": "left", "address": "URL"}`. Leave blank for Hero type.                                |
| Button      | Button properties in JSON format. ex `{"name": "Go to page 2", "slug": "/page-2/"}`. Leave blank for Hero type.                          |

#### Instructions

- Clone this repository (no sh\*t)
- `yarn` to install dependencies
- Create two files named `.env.development` and `.env.production`. And enter your api key like this: `AIRTABLE_APIKEY=YOUR_APIKEY` to both of the files.
- `yarn develop` to start development server. Remember to restart the server everytime you changed the table.
- Make your changes. (and open a pull request?)
- `yarn build` to build.
- `yarn serve` to serve the site in production mode.
