import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";

const CreateBoard = () => {
  const { mutate, isLoading } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  function createBoard() {
    if (!organization) return;

    mutate({ orgId: organization.id, title: "Untitled" })
      .then((id) => toast.success("Board created successfully"))
      .catch(() => toast.error("Failed to create board"));
  }

  return (
    <Button
      className="mt-6"
      size="lg"
      onClick={createBoard}
      disabled={isLoading}
    >
      Create board
    </Button>
  );
};

export default CreateBoard;
