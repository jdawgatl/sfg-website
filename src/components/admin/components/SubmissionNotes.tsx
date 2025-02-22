
import { FileText, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Note } from "../types/submission";

interface NotesProps {
  notes: Note[];
  notesDraft: string;
  isEditing: boolean;
  onNoteDraftChange: (value: string) => void;
  onSaveNote: () => void;
  onCancelNote: () => void;
  formatDate: (date: string) => string;
}

export const SubmissionNotes = ({
  notes,
  notesDraft,
  isEditing,
  onNoteDraftChange,
  onSaveNote,
  onCancelNote,
  formatDate,
}: NotesProps) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white rounded-lg shadow-sm p-2 border">
        <h4 className="font-medium text-sky-700 mb-4 flex items-center gap-2 text-sm">
          <FileText className="h-4 w-4" />
          Notes History
        </h4>
        <ScrollArea className="h-[180px] w-full">
          <div className="pt-6 space-y-1.5">
            {[...notes].reverse().map((note, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-1.5 rounded-md border-l-2 border-sky-500 group relative mt-2"
              >
                <p className="text-xs text-gray-700">{note.content}</p>
                <div className="text-xs text-gray-500">
                  {formatDate(note.timestamp).split(',')[0]}
                </div>
                <div 
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2 -top-8 left-0 whitespace-nowrap z-50 pointer-events-none"
                >
                  Added by {note.author}
                  <br />
                  {formatDate(note.timestamp)}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-2 border">
        <h4 className="font-medium text-sky-700 mb-4 flex items-center gap-2 text-sm">
          <Loader2 className="h-4 w-4" />
          Add New Note
        </h4>
        <div className="space-y-1.5 pt-2">
          <Textarea
            placeholder="Type your note here..."
            value={notesDraft}
            onChange={(e) => onNoteDraftChange(e.target.value)}
            className="min-h-[120px] bg-gray-50 border resize-none text-sm"
          />
          {isEditing && (
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="w-full text-xs py-1"
                onClick={onSaveNote}
              >
                Save Note
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full text-xs py-1"
                onClick={onCancelNote}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
