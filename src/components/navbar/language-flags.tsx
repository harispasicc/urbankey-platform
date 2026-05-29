import { FlagBa, FlagGb } from "@sankyu/react-circle-flags";
type FlagProps = {
  size?: number;
  className?: string;
};

export function FlagEn({ size = 22, className }: FlagProps) {
  return (
    <FlagGb
      width={size}
      height={size}
      className={`block shrink-0 rounded-full ${className ?? ""}`}
      title="English"
    />
  );
}

export function FlagBs({ size = 22, className }: FlagProps) {
  return (
    <FlagBa
      width={size}
      height={size}
      className={`block shrink-0 rounded-full ${className ?? ""}`}
      title="Bosanski"
    />
  );
}
