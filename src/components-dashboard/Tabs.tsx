import * as Tabs from "@radix-ui/react-tabs";

export function Tabbe() {
  return (
    <Tabs.Root defaultValue="installation" className="w-full">
      <Tabs.List className="flex border-b">
        {[
          { value: "installation", label: "Installation" },
          { value: "charts", label: "Charts" },
          { value: "color", label: "Color" },
          { value: "components", label: "Components" },
        ].map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="px-4 py-2 border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-bold"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Tabs.Content value="installation" className="p-4">
        <p>How to install dependencies and structure your app.</p>
      </Tabs.Content>
      
      <Tabs.Content value="charts" className="p-4">
        <p>Built using Recharts. Copy and paste into your apps. Open Source.</p>
      </Tabs.Content>

      <Tabs.Content value="color" className="p-4">
        <p>Tailwind CSS colors in HSL, RGB, HEX and OKLCH formats.</p>
      </Tabs.Content>

      <Tabs.Content value="components" className="p-4">
        <p>
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
