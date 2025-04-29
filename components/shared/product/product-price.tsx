import {cn} from "@/lib/utils";

/**
 * ProductPrice component displays the price of a product.
 * @param value - The price value to display
 * @param className - Optional additional class names for styling
 */
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