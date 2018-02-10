# p-calendar-api
A simple calendar service API

## Live Site 

The api is live on heroku @ https://warm-plateau-57879.herokuapp.com/. Have fun. 

## Install and usage

run `npm install` to install dependencies.

run `npm start` to run application.

app is served on http://localhost:3000.

The following endpoints are available:
- `GET('/')` to list all events in DB.
- `POST('/')` to add a new event. This route expects a json object with the following format:

```
{
    "title": "The title of the event",
    "patientName": "The name of the patient"
    "eventStartDate": "YYYY-DD-MM"  
    "eventEndDate": "YYYY-DD-MM" 
}
```

- `GET('/:id')` to view a single event where `:id` is the events id.
- `PUT('/:id')` to update an event where `:id`. The fields to be update is expected as a json object.
- `DELETE('/:id')` to remove an event from the DB.

### Testing 

run `npm test`

## License

[MIT](LICENSE)