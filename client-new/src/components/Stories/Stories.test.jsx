import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { STORIES_QUERY } from "../../graphql/queries";
import { defaultMessages } from "../../constants";
import Stories from "./Stories";

describe("<Stories/>", () => {
  const mocks = [
    {
      request: {
        query: STORIES_QUERY,
      },
      result: {
        data: {
          stories: [
            {
              id: "1",
              name: "story 1",
              image: "story-1.jpg",
              description: "story description",
              extra: "",
            },
          ],
        },
      },
    },
  ];

  it("should display a loading message when component is fetching data", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display stories after a successful query", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/story 1/i)).toBeInTheDocument();
      expect(screen.getByText(/story description/i)).toBeInTheDocument();
      expect(screen.getByAltText(/story 1/i)).toBeInTheDocument();
    });
  });

  it("should display error message if there is an error", async () => {
    const mocksError = [
      {
        request: {
          query: STORIES_QUERY,
        },
        error: new Error("Oups!"),
      },
    ];

    render(
      <MockedProvider mocks={mocksError} addTypename={false}>
        <Stories />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByText(defaultMessages.ERROR_LOADING_DATA)
      ).toBeInTheDocument();
    });
  });

  it("should display error message AND successful stories", async () => {
    const arrMocksError = [
      {
        request: {
          query: STORIES_QUERY,
        },
        result: {
          errors: [new GraphQLError("Error with the Apollo server.")],
          data: {
            stories: [
              {
                id: "1",
                name: "story 1",
                image: "story-1.jpg",
                description: "story description",
                extra: "",
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider
        mocks={arrMocksError}
        addTypename={false}
        defaultOptions={{ watchQuery: { errorPolicy: "all" } }}
      >
        <Stories />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByText(defaultMessages.ERROR_LOADING_DATA)
      ).toBeInTheDocument();
      expect(screen.getByText(/story 1/i)).toBeInTheDocument();
    });
  });
});
