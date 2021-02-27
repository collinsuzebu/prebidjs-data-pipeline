# Prebid.JS Analytic Data.

![alt text]()

## Diagram Label:

- **A.** User visits publishers website.
- **B.** A bid request is sent from Prebid JS for ads to display to the user.
- **C.** Bid responses becomes available to the browser through Prebid JS.
- **D.** These responses are then forwarded to the publisher's AdServer and to a persistent messaging queue. (think Rabbitmq).
- **E.** Nodes consumes the data from this queue and optionally store in a data lake for future reference.
- **F.** At this stage, a complex ETL process begins.
- **G.** Structured and cleaned data is finally loaded into the data warehouse.

## Developer's Story ???

High floor prices may result to advertisers refraining from bidding and this may cause lesser coverage or fill inventory. The key is to find that balance that gives a solid amount of coverage while maintaining ideal or high prices.

#### Batch Data

In aggregating the auction data, we do not want to capture every event. Having massive amount of data is invaluable for our analysis but how good would be data that don't give us much insight into what we need?

#### Sampling Data

Continuously sending all captured data might lead to performance issue in our queuing system. Even though we have multiple queue clusters strategically spread across different geo location. A better way to handle this is to only capture and send data at a defined sampling rate.

#### Real Time Insights

Once data being consumed are transformed and streamed to a database, queries can be made to these tables to provide real time insights for a client.

## Setup and Run Locally

The project demo has been created using React JS for client side integration. Capturing of auction data from Prebid JS was performed on the client-side. (i.e the browser). The data could also have been captured by creating an **analytic adapter** for the [Prebid Framework](https://docs.prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html). More on this below.

```
git clone https://github.com/collinsuzebu/prebidjs-data-pipeline.git
cd prebidjs-data-pipeline
npm install
npm start
```

## Limitations

- Sending data from client side like in the demo is likely to cause authentication data to be exposed to the client. An alternative might be to integrate analytics collection with backend, but without a quick release cycle, instant changes would not be integrated. (think about adding a new field or removing a field from the samples collected)
