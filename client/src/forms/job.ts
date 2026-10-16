import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { catagory } from "../helpers/select";

const required = (label: string) => z.string().trim().min(1, `${label} is required`);

const jobFields = z.object({
  catagory: required("Category"),
  sub_catagory: required("Subcategory"),
  title: required("Project title"),
  discription: required("Project description"),
  currency: required("Currency"),
  budgetType: required("Budget type"),
  budget: required("Budget").refine((value) => Number(value) > 0 && Number.isFinite(Number(value)), "Enter an amount greater than zero"),
  duration: required("Duration"),
  skillLevel: required("Skill level"),
});

export const jobSchema = toTypedSchema(jobFields);
export type JobValues = z.infer<typeof jobFields>;

export const categoryOptions = [
  { value: "20", label: "Technology & Programming" },
  { value: "21", label: "Writing & Translation" },
  { value: "22", label: "Design" },
  { value: "23", label: "Digital Marketing" },
  { value: "24", label: "Video, Photo & Image" },
  { value: "25", label: "Business" },
  { value: "26", label: "Music & Audio" },
  { value: "27", label: "Marketing, Branding & Sales" },
  { value: "28", label: "Social Media" },
];

export const currencyOptions = [
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "EUR", label: "EUR (€)" },
  { value: "BIRR", label: "ETB (Birr)" },
];

export const budgetTypeOptions = [
  { value: "fixed_price", label: "Fixed price" },
  { value: "hourly", label: "Per hour" },
];

export const durationOptions = [
  "1 day or less", "less than 1 week", "1 - 2 weeks", "3 - 4 weeks",
  "1 - 6 months", "More than 6 months", "Ongoing", "Not sure", "CUSTOM",
].map((value) => ({ value, label: value === "CUSTOM" ? "Other" : value }));

export const skillLevelOptions = [
  { value: "entry", label: "Entry level" },
  { value: "intermediate", label: "Intermediate level" },
  { value: "expert", label: "Expert level" },
];

export function subcategoryOptions(category: string) {
  return (catagory[Number(category)] || []).map((item) => ({ value: item.value, label: item.text }));
}
