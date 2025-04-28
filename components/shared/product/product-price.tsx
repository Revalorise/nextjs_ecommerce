import {cn} from "@/lib/utils";

export default function ProductPrice({ value, className }: { value: number, className?: string }) {
    const stringValue = value.toFixed(2);
    const [dollar, cent] = stringValue.split('.')

    return (
        <p className={ cn('text-2xl', className) }>
            <span className="text-xs align-super">$</span>
            {dollar}
            <span className="text-xs align-super">.{cent}</span>
        </p>
    )

}