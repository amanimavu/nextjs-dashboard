"use client";

import { lusitana } from "@/app/ui/fonts";
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { useActionState } from "react";
import { createAccount } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function SignUpForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
    const [errorMessage, formAction, isPending] = useActionState(
        createAccount,
        undefined
    );

    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Provide a username"
                                required
                                aria-describedby="username-error"
                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div
                            id="username-error"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {typeof errorMessage !== "string" &&
                                errorMessage?.errors.username &&
                                errorMessage.errors.username.map(
                                    (error: string) => (
                                        <p
                                            className="mt-2 text-sm text-red-500"
                                            key={error}
                                        >
                                            {error}
                                        </p>
                                    )
                                )}
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                                aria-describedby="email-error"
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div
                            id="email-error"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {typeof errorMessage !== "string" &&
                                errorMessage?.errors.email &&
                                errorMessage.errors.email.map(
                                    (error: string) => (
                                        <p
                                            className="mt-2 text-sm text-red-500"
                                            key={error}
                                        >
                                            {error}
                                        </p>
                                    )
                                )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                                aria-labelledby="password-error"
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div
                            id="password-error"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {typeof errorMessage !== "string" &&
                                errorMessage?.errors.password &&
                                errorMessage.errors.password.map(
                                    (error: string) => (
                                        <p
                                            className="mt-2 text-sm text-red-500"
                                            key={error}
                                        >
                                            {error}
                                        </p>
                                    )
                                )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="confirm_password"
                        >
                            Confirm password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                                aria-labelledby="password-error"
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div
                            id="password-error"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {typeof errorMessage !== "string" &&
                                errorMessage?.errors.password &&
                                errorMessage.errors.password.map(
                                    (error: string) => (
                                        <p
                                            className="mt-2 text-sm text-red-500"
                                            key={error}
                                        >
                                            {error}
                                        </p>
                                    )
                                )}
                        </div>
                    </div>
                </div>
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <Button
                    className="mt-4 w-full justify-center"
                    aria-disabled={isPending}
                >
                    Create Account
                </Button>
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {typeof errorMessage === "string" && (
                        <>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">
                                {errorMessage}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}
