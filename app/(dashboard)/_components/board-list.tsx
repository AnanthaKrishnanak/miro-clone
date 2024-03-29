"use client";

import { Button } from "@/components/ui/button";
import CreateBoard from "./create-board";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search)
    return (
      <div className="h-full flex items-center justify-center">
        No results found
      </div>
    );

  if (!data?.length && query.favorites)
    return (
      <div className="h-full flex items-center justify-center">
        No favorites
      </div>
    );

  if (!data?.length)
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="font-semibold">Create your first board!</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Start by creating a board for your organization
        </p>
        <CreateBoard />
      </div>
    );

  return <div>board lsit</div>;
};

export default BoardList;
