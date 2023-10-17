import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Item } from "../page";

export default function ItemsAccordion({ items }: { items: Item[] }) {
  return (
    <div style={{ maxWidth: "70vw", minWidth: "50vw" }} data-testid="accordion-wrapper">
      {items.map((item) => {
        return (
          <Accordion key={item.id} data-testId={`accordion-item-${item.id}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <Typography>{item.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
