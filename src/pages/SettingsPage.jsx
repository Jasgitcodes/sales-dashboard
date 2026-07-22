import React from "react";
import {
  Bell,
  ShieldCheck,
  Palette,
  Smartphone,
  CircleHelp,
  ArrowRight,
} from "lucide-react";

const settingsSections = [
  {
    title: "Notifications",
    description: "Choose what alerts you receive and how often they show up.",
    icon: Bell,
    accent: "bg-amber-100 text-amber-700",
  },
  {
    title: "Security",
    description:
      "Protect your account with stronger controls and sign-in checks.",
    icon: ShieldCheck,
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Appearance",
    description:
      "Switch between light and dark-inspired themes and refine the feel.",
    icon: Palette,
    accent: "bg-violet-100 text-violet-700",
  },
  {
    title: "Devices",
    description: "Manage the devices connected to your workspace and sessions.",
    icon: Smartphone,
    accent: "bg-sky-100 text-sky-700",
  },
  {
    title: "Support",
    description: "Get help quickly with guides, contact options, and FAQs.",
    icon: CircleHelp,
    accent: "bg-rose-100 text-rose-700",
  },
];

const SettingsPage = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="rounded-2xl border border-indigo-200 bg-white/90 p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
              Workspace settings
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-indigo-950">
              Fine-tune your dashboard experience
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Configure alerts, security, appearance, and support preferences in
              one polished place.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-indigo-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
          >
            Save changes
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {settingsSections.map((section) => {
          const Icon = section.icon;

          return (
            <div
              key={section.title}
              className="rounded-2xl border border-indigo-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`inline-flex rounded-2xl p-3 ${section.accent}`}>
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-indigo-950">
                {section.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {section.description}
              </p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700"
              >
                Open section
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-indigo-200 bg-indigo-900 p-5 text-white shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Pro features unlocked</h3>
            <p className="mt-2 max-w-2xl text-sm text-indigo-200">
              Stay ahead with intelligent automation, advanced team controls,
              and faster workflows.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-100"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
