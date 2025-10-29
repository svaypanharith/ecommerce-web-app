import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider } from "react-hook-form";
import MInput from "@/components/m-ui/m-input";
import { Button } from "@/components/ui/button";

interface AddStorageFormProps {
  onSubmit: (data: FormValues) => void;
  isLoading?: boolean;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  capacity: z.coerce.number().min(1, "Capacity is required"),
  description: z.string().min(1, "Description is required"),
  status: z.string().min(1, "Status is required"),
});

export type FormValues = z.infer<typeof formSchema>;

export default function AddStorageForm({ onSubmit, isLoading = false }: AddStorageFormProps) {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      capacity: 0,
      description: "",
      status: "ACTIVE", 
    },
  });

  const handleAddStorage = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form 
        onSubmit={methods.handleSubmit(handleAddStorage)} 
        className="space-y-6 max-w-full  p-6 bg-white rounded-lg shadow-sm border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Storage</h2>
        
        <div className="space-y-4">
          <MInput
            label
            labelText="Storage Name"
            placeholder="Enter storage name"
            name="name"
          />

          <MInput
            label
            labelText="Storage Capacity (GB)"
            placeholder="Enter capacity"
            type="number"
            name="capacity"
          
          />

          <MInput
            label
            labelText="Description"
            placeholder="Enter storage description"
            name="description"

          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              {...methods.register("status")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50"
              disabled={isLoading}
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
            {methods.formState.errors.status && (
              <p className="mt-1 text-sm text-red-600">
                {methods.formState.errors.status.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
          <Button
            type="button"
            variant="outline"
            onClick={() => methods.reset()}
            disabled={isLoading}
            className="px-6"
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="px-6 bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Storage"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}