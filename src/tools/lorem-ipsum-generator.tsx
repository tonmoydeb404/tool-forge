import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

export const LoremIpsumGenerator = () => {
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([3]);
  const [wordsPerParagraph, setWordsPerParagraph] = useState([50]);

  const loremWords = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "duis",
    "aute",
    "irure",
    "in",
    "reprehenderit",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "fugiat",
    "nulla",
    "pariatur",
    "excepteur",
    "sint",
    "occaecat",
    "cupidatat",
    "non",
    "proident",
    "sunt",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollit",
    "anim",
    "id",
    "est",
    "laborum",
  ];

  const generateText = () => {
    let result = "";
    for (let p = 0; p < paragraphs[0]; p++) {
      let paragraph = "";
      for (let w = 0; w < wordsPerParagraph[0]; w++) {
        const randomWord =
          loremWords[Math.floor(Math.random() * loremWords.length)];
        paragraph +=
          (w === 0
            ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1)
            : randomWord) + " ";
      }
      result += paragraph.trim() + ".\n\n";
    }
    setText(result.trim());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Generated Text</Label>
        <div className="flex gap-2 mb-2">
          <Button size="sm" onClick={copyToClipboard} disabled={!text}>
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
        </div>
        <Textarea
          value={text}
          readOnly
          placeholder="Click generate to create lorem ipsum text"
          className="min-h-[200px]"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Paragraphs: {paragraphs[0]}</Label>
          <Slider
            value={paragraphs}
            onValueChange={setParagraphs}
            max={10}
            min={1}
            step={1}
          />
        </div>

        <div className="space-y-2">
          <Label>Words per paragraph: {wordsPerParagraph[0]}</Label>
          <Slider
            value={wordsPerParagraph}
            onValueChange={setWordsPerParagraph}
            max={100}
            min={10}
            step={5}
          />
        </div>

        <Button onClick={generateText} className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate Lorem Ipsum
        </Button>
      </div>
    </div>
  );
};
