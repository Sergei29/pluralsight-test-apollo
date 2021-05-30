import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { STORIES_QUERY } from "../../graphql/queries";
import Stories from "./Stories";

describe("<Stories/>", () => {
  it("should display a loading message when component is fetching data", () => {
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
                description: "about story 1",
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
